import Database from "../dbconfig/config.js";

export const validTasks = async (req, res, next) => {
    try{

        const id = req.params.id;
        const db = await Database()

        const Istask = await db.get(`SELECT * FROM tasks WHERE id = ${id}`) 

        if(!Istask){
            res.status(404).send({message: "Task not found"})
        } else {
        next()
    }

    }catch (error) {
    res.status(500).send({ message: error.message });
  }
}