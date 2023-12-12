import { Router } from 'express'
import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategorySevice } from '../services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const {name, description} = request.body;

  const create = new CreateCategorySevice();

  create.execute({name, description});

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {

  const all = categoriesRepository.list();
  
  return response.status(200).json({all}) ;
});

export { categoriesRoutes };
