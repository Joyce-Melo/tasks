import { Database } from "sqlite3";

export const create = async (req, res) => {
    try{

        const { title, description } = req.body;
        

        if(!title || !description){
            res.send({message:"Please, submit all fields"})
        }

        const db = await new Database();

        await db.run(`INSERT INTO tasks (
            title,
            description
        )VALUES(
            "${title}",
            "${description}"
        )`)
    
        res.json("Task created")


        
    } catch (error){
        res.status(500).send({message: error.message})
    }
};