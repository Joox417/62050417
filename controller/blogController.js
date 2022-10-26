const Blog = require("../models/blog");

exports.index = async (req, res, next) => {
  const blog = await Blog.find();

  res.status(200).json({
    messages: "ข้อมูลทั้งหมด",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;

  const blog = new Blog({
    title: title,
    detail: detail,
  });

  await blog.save();
  res.status(201).json({
    messages: "ซื้อขนมเข้าบ้าน",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;

  await Blog.findByIdAndDelete(id);
  res.status(200).json({
    messages: "ลบข้อมูลสำเร็จ",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, detail } = req.body;

  await Blog.findByIdAndUpdate(id, {
    title: title,
    detail: detail,
  });
  res.status(200).json({
    messages: "ขนมจีบ ซาลาเปา กล้วยต้ม",
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id });

  res.status(200).json({
    messages: "สวัสดียินดีต้อนรับ",
    data: blog,
  });
};
