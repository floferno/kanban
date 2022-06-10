const { Task, User } = require('../models')

class TaskController {
    // static getTasks(req, res) {
    //     Task.findAll()
    //     .then(data => {
    //         res.status(200).json(data)
    //     })
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })
    // }

    static async getTasks(req, res, next) {
        try {
            const data = await Task.findAll({
                include: {
                    model: User,
                    attributes: ['id', 'name', 'email']
                }
            })
            if(!data) {
				throw { msg: "No task added yet"}
			} else { 
				res.status(200).json(data)
			}
		} catch(err) {
            next(err)
		}
    }

    // static addTask(req, res) {
    //     const { title, description, status, due_date } = req.body
    //     Task.create({
    //         title, description, status, due_date
    //     })
    //     .then(data => {
    //         res.status(201).json(data)
    //     })
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })
    // }

    static async addTask(req, res, next) {
        try {
            const { title, description, category } = req.body
            const UserId = +req.decoded.id;
            
            const data = await Task.create({ title, description, category, UserId})
            if(data) res.status(201).json({ 
                title: data.title,
                description: data.description, 
                category: data.category,
            })
		} catch(err) {
            next(err)
		}
    }

    // static getTaskById(req, res) {
    //     Task.findOne({
    //         where: {
    //             id: +req.params.id
    //         }
    //     })
    //     .then((data) => {    
    //         console.log(data)
    //         res.status(200).json(data)
    //     })
    //     .catch((err) => {
    //         res.status(500).json(err)
    //     })  
    // }


    static async getTaskById(req, res, next) {
		try {
			const data = await Task.findOne({
            where: {
                id: +req.params.id
            }
        })
			if(!data) {
				throw { msg: "Data not found"}
			} else { 
				res.status(200).json(data)
			}
		} catch(err) {
            next(err)
		}
    }

	
    // static updateTask(req, res) {
    //     console.log("masuk")
    //     const { title, description, status, due_date } = req.body
    //     Task.update({ title, description, status, due_date },{
    //         where: {
    //             id: +req.params.id
    //         },
    //         returning: true
    //     })
    //     .then(data => {
    //         res.status(200).json(data[1][0])
    //     })
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })
    // }

	static async updateTask(req, res, next) {
		try {
			const { title, description } = req.body
			const data = await Task.update({ title, description }, {
				where: {
					id: +req.params.id
				},
				returning: true
			})
			if(!data) {
				throw { msg: "Data not found"}
			} else { 
				res.status(200).json(data[1][0])
			}
		} catch(err) {
            next(err)
		}
	}

    // static updateStatus(req, res) {
    //     const { status } = req.body
    //     Task.update({ status }, {
    //         where: {
    //             id: +req.params.id
    //         },
    //         returning: true
    //     })
    //     .then(data => {
    //         res.status(200).json(data[1][0])
    //     })
    //     .catch(err => {
    //         res.status(500).json(err)
    //     })
    // }

	static async updateCategory(req, res, next) {
        try {
			const { category } = req.body
			const data =  await Task.update({ category }, {
				where: {
					id: +req.params.id
				},
				returning: true
			})
			if(!data) {
					throw { msg: "Data not found"}
				} else { 
					res.status(200).json(data[1][0])
				}
		} catch(err) {
            next(err)            
		}
    }


// static deleteTask(req, res) {
//    const id = +req.params.id;
//     let deletedTask;

//     Task.findByPk(id)
//       .then(task => {
//         deletedTask = task;
//         return Task.destroy({
//           where: { id }
//         })
//     })
//       .then(() => {
//         res.status(200).json({ deleted_task: deletedTask, message: 'Successfully delete task' });
//     })
//        .catch(err => {
//         next(err);
//     })
// }

	static async deleteTask(req, res, next) {
		try {
            const id = +req.params.id;
            let deletedTask
            const data = await Task.findByPk(id)
            // console.log(data, "ini data")
			if(!data) {
                throw { msg: "Data not found" }
			} else { 
                let deletedTask 
                deletedTask = data;
                res.status(200).json({ deleted_task: data, msg: "Task successfully deleted"})
                return Task.destroy({
                    where: {
                         id: +req.params.id
                    }
                })     
			}
		} catch(err) {
            next(err)
		}
	}

}

module.exports = TaskController