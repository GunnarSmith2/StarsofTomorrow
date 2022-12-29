import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        await clientPromise();
        res.status(200).json({ message: "Connection Established" });
    } catch (error) {
        res.status(500).json({ message: "connection Failed" });
    }
};