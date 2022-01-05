const Article = require('../models/article-model');

const createArticle = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a article',
    });
  }

  try {
    const article = new Article(body);
    await article.save();
    return res.status(201).json({
      success: true,
      data: article,
      message: 'Article created!',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: 'Article not created!',
    });
  }
};

const updateArticle = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  try {
    await Article.updateOne({ _id: req.params.id }, body);
    return res.status(200).json({
      success: true,
      message: 'Article updated!',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
      message: 'Article not updated!',
    });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findOneAndDelete({ _id: req.params.id });

    if (!article) {
      return res
        .status(404)
        .json({ success: false, error: `Article not found` });
    }

    return res.status(200).json({ success: true, id: article._id });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findOne({ _id: req.params.id });

    if (!article) {
      return res
        .status(404)
        .json({ success: false, error: `Article not found` });
    }

    return res.status(200).json({ success: true, data: article });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});

    if (!articles.length) {
      return res
        .status(404)
        .json({ success: false, error: `Articles not found` });
    }

    return res.status(200).json({ success: true, data: articles });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleById,
  getArticles,
};
