var getRXTAttributes = function (type) {
    var config = require('/config/publisher.json');
    var modelManager = application.get(config.app.MODEL_MANAGER);
    var model = modelManager.getModel(type);
    return model.export('formo');
};


var getCategories = function (type) {
    var config = require('/config/publisher.json');
    var modelManager = application.get(config.app.MODEL_MANAGER);
    var model = modelManager.getModel(type);
    var fieldArr = model.export('form')['fields'];

    for (var i in fieldArr) {
        if (fieldArr.hasOwnProperty(i)) {
            if (fieldArr[i].name == 'overview_category')
                return fieldArr[i].valueList;
        }
    }


};


