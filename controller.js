
const carsSchema = require('./model');

const addCar = (req, res) => {
    const postBody = req.body;
	if (!(postBody)) {
		return res
				.status(400)
				.json({ 
					success: false, 
					error: 'Please enter a Car' 
				});
    }

	if (typeof(postBody.year) != "number") {
		return res
				.status(400)
				.json({ 
					success: false, 
					error: 'Please enter a Year' 
				});
    }

	if (!(postBody.make)) {
		return res
				.status(400)
				.json({ 
					success: false, 
					error: 'Please enter a Make' 
				});
    }

    const newCar = new carsSchema({
		title: `${postBody.year} ${postBody.make} ${postBody.model}`,
		year: postBody.year,
   		make: postBody.make,
   		model: postBody.model,
   		levelTwoConnector: postBody.levelTwoConnector,
   		levelTwoMaxCharge: postBody.levelTwoMaxCharge,
   		levelThreeConnector: postBody.levelThreeConnector,
   		levelThreeMaxCharge: postBody.levelThreeMaxCharge,
   		batterySize: postBody.batterySize,
   		range: postBody.range,
    });

    if(!newCar){
        return res
				.status(400)
				.json({
        		    success: false,
        		    error: err
        		});
    }

    newCar.save()
           .then(() => {
               return res.status(201).json({
                   success: true,
                   id: newCar._id,
                   message: `${newCar.title} was sucessfully added`
               });
           })
           .catch((err) => {
               return res.status(400).json({
                   error: err,
                   message: 'Car not added'
               });
           })
};



const getAllCars = (req, res) => {
    carsSchema.find({}, function(err, foundCars){
        if(err){
          return res
                    .status(400)
                    .json({success: false, error: err});
        }else{
        
            return res
                .status(200)
                .json({success: true, data: foundCars});
        }
      }).catch(err => console.log(err));
};


const getAllMakes = async (req, res) => {

    await carsSchema.distinct('make', (err, foundMakes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({success: true, data: foundMakes});
    }).catch(err => console.log(err));

};


const getAllCarsByYear = async (req, res) => {

    selectedYear = req.params.carYear;
    await carsSchema.find(
        {year: selectedYear}, 
        function(err, foundMakes){
            if(err){
                return res
                          .status(400)
                          .json({success: false, error: err});
            }else{
                return res
                          .status(200)
                          .json({success: true, data: foundMakes});
            }
    }).catch(err => console.log(err));
}

const getAllDistinctMakesByYear = async (req, res) => {

    selectedYear = req.params.carYear;
    await carsSchema.distinct('make',{year: selectedYear}, (err, foundMakes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({success: true, data: foundMakes});
    }).catch(err => console.log(err));

};


const getAllModelsofMake = async (req, res) => {

    selectedMake = req.params.carMake;
    await carsSchema.find(
        {make: selectedMake}, 
        function(err, foundModels){
            if(err){
                return res
                          .status(400)
                          .json({success: false, error: err});
            }else{
                return res
                          .status(200)
                          .json({success: true, data: foundModels});
            }
    }).catch(err => console.log(err));
}


const getAllModelsofMakeByYear = async (req, res) => {

    selectedMake = req.params.carMake;
    selectedYear = req.params.carYear;
    await carsSchema.find(
        {make: selectedMake, year: selectedYear},
        function(err, foundModels){
            if(err){
                return res
                          .status(400)
                          .json({success: false, error: err});
            }else{
                return res
                          .status(200)
                          .json({success: true, data: foundModels});
            }
    }).catch(err => console.log(err));
}


const getAllDistictYears = async (req, res) => {

    await carsSchema.distinct('year', (err, foundYears) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({success: true, data: foundYears});
    }).catch(err => console.log(err));
}



module.exports = {
    addCar,
    getAllCars,
    getAllMakes,
    getAllCarsByYear,
    getAllModelsofMake,
    getAllModelsofMakeByYear,
    getAllDistictYears,
    getAllDistinctMakesByYear,
};