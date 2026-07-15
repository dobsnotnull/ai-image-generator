export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { model, prompt, width, height } = req.body || {};

    if (!model || !prompt || !width || !height) {
        return res.status(400).json({ error: "Missing model, prompt, width, or height" });
    }

    const HF_API_KEY = process.env.HF_API_KEY;

    if (!HF_API_KEY) {
        return res.status(500).json({ error: "Server is missing HF_API_KEY" });
    }

    try {
        const hfResponse = await fetch(`https://router.huggingface.co/hf-inference/models/${model}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/json",
                "x-use-cache": "false",
            },
            body: JSON.stringify({
                inputs: prompt,
                parameters: { width, height },
                options: { wait_for_model: true, user_cache: false },
            }),
        });

        if (!hfResponse.ok) {
            const errorBody = await hfResponse.json().catch(() => null);
            return res.status(hfResponse.status).json({ error: errorBody?.error || "Image generation failed" });
        }

        const contentType = hfResponse.headers.get("content-type") || "image/png";
        const imageBuffer = Buffer.from(await hfResponse.arrayBuffer());

        res.setHeader("Content-Type", contentType);
        return res.status(200).send(imageBuffer);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
