import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest{
  name: string; description: string
}

class CreateCategorySevice {

  execute({name, description}: IRequest) {
    const categoriesRepository = new CategoriesRepository();
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    categoriesRepository.create({ name, description });
  }
}

export { CreateCategorySevice }
