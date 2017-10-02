module.exports = {
    ChildrenProfileDetial: function (sequelize, Sequelize, modelName) {
        var User = sequelize.define('childrenprofiles', {
            full_name: {
                type: Sequelize.STRING
            },
            workflowstatus_volunteer: {
                type: Sequelize.STRING
            },
            workflowstatus_mentor: {
                type: Sequelize.STRING
            },
            connection_status: {
                type: Sequelize.INTEGER
            },
            dob: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            gender: {
                type: Sequelize.STRING
            },
            center: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            password: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.INTEGER
            },
            active_ind: {
                type: Sequelize.INTEGER
            },
            pre_assessment_data: {
                type: Sequelize.STRING
            },
            updated_at: {
                type: Sequelize.DATE
            },
            role: {
                type: Sequelize.STRING
            },
            photos: {
                type: Sequelize.STRING
            },
             mentor_approval: {
                type: Sequelize.INTEGER
            }

            // id:{
            //     type:Sequelize.INTEGER,
            //     primaryKey:true

            // }   
        });
        return User;
    }
}
