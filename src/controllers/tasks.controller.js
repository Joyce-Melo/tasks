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

export const findTasks = async (req, res) => {
  try {
    const db = await Database();

    const taskList = await db.all(`SELECT * FROM tasks`);
    res.status(200).send({ taskList });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    const db = await Database();

    if (!title && !description) {
      res
        .status(400)
        .send({ message: "Please, submit at least one field for update" });
    } else {
      // const taskToUpdate = await db.get(`SELECT * FROM tasks WHERE`)
      //const taskToUpdate = await db.run(
        //`UPDATE tasks SET title = "${title}", description = "${description}" WHERE id = ${id}`
      //);
      //res.status(200).send({ taskToUpdate });
        if (!title){
            const descriptionUpdate = await db.run (`UPDATE tasks SET description = "${description}" WHERE id = ${id}`)
            res.status(200).send({ descriptionUpdate });
        } if (!description){
            const titleUpdate = await db.run(`UPDATE tasks SET title = "${title}" WHERE id = ${id}`)
            res.status(200).send({ titleUpdate });
        } else{
            const taskToUpdate = await db.run(
                `UPDATE tasks SET title = "${title}", description = "${description}" WHERE id = ${id}`);
                res.status(200).send({ taskToUpdate });     
        }


    }

    console.log("Task Updated");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
