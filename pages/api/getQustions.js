export default function handler(req, res) {
    const {category, difficult, questionsNumber} = JSON.parse(req.body)

    let dataFromApi = {}

    fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&category=${category}&difficulty=${difficult}`)
    .then(res => res.json())
    .then(res => dataFromApi = res)
    
    console.log(dataFromApi);
    
    res.status(200).json(dataFromApi)
  }