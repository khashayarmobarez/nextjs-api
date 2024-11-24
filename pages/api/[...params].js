// params 
// if there were no index, you should name the file as [[...params]].js
export default function handler(req, res) {
    const { params } = req.query;
    res.status(200).json({message:'homepage api', params });   
}