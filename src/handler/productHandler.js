let productRepository;

exports.setProductREpository = (repo) => {
    productRepository = repo;
}

exports.getAll = async (req, res) => {
    const products = await productRepository.find();
    res.json(products);
}

exports.getById = async (req, res) => {
    const product = await productRepository.findOneBy({id: req.params.id});
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
}

exports.addProduct = async (req, res) => {
    const { name, price } = req.body;
    const newProduct = productRepository.create({ name, price });
    await productRepository.save(newProduct);
    res.status(201).json(newProduct);
}

exports.updateById = async (req, res) => {
    const { name, price } = req.body;
    const product = await productRepository.findOneBy({id: req.params.id});
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    product.name = name;
    product.price = price;
    await productRepository.save(product);
    res.json(product);
}

exports.deleteById = async (req, res) => {
    const result = await productRepository.delete(req.params.id);
    if (result.affected === 0) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
}