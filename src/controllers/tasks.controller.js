import Database from "../dbconfig/config.js";

export const create = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).send({ message: "Please, submit all fields" });
    } else {
      const db = await Database();

      await db.run(`INSERT INTO tasks (
            title,
            description
        )VALUES(
            "${title}",
            "${description}"
        )`);
      res.status(200).send("Task created");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findTasks = async (req,res) => {
    try{
        const db = await Database()

        const taskList = await db.get(`SELECT * FROM tasks`);
        res.status(200).send({taskList})

    }catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export const updateTask = async (req, res) => {
    try {
        console.log("Task Updated")
    } catch (error) {
        res.status(500).send({ message: error.message });
        
    }
}