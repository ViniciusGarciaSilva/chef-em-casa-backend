exports.get = (req: any, res: any, next: any) => {
  res.status(200).send('Requisição recebida com sucesso!');
};

exports.getById = (req: any, res: any, next: any) => {
  res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req: any, res: any, next: any) => {
  res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = (req: any, res: any, next: any) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req: any, res: any, next: any) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};