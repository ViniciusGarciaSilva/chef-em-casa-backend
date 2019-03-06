import { getMenus } from "../dao/menu.dao";

exports.get = (req: any, res: any, next: any) => {
  const menus = getMenus();
  res.status(200).send(menus);
};

exports.getById = (req: any, res: any, next: any) => {
  res.status(200).send('get by id menus');
};

exports.post = (req: any, res: any, next: any) => {
  res.status(201).send('post menus');
};

exports.put = (req: any, res: any, next: any) => {
  let id = req.params.id;
  res.status(201).send(`put menus ${id}`);
};

exports.delete = (req: any, res: any, next: any) => {
  let id = req.params.id;
  res.status(200).send(`delete menus ${id}`);
};