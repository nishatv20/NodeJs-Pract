const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'note 6' },
         { 
            $set: {name: 'max pro 5' }
        }
    );
    console.warn(result)
}

updateData();