const Menu = require('../models/menu')

// const getNextCode = async (restaurantId) => {
//     // Find the highest current code for the restaurant
//     const highestCodeDoc = await Menu.findOne({ restaurantId }).sort({ code: -1 }).exec();
//     const highestCode = highestCodeDoc ? highestCodeDoc.code : 0;
//     return highestCode + 1;
// };

const AddMenu = async (req,res)=>{
    const {  item, category, subCategory, price } = req.body;
   const  restaurantId= req.restaurant.restaurantId
//  console.log(restaurantId,item, category, subCategory, price);
    try {
        // const code = await getNextCode(restaurantId);

        const newItem = new Menu({
            restaurantId,
            item,
            category,
            subCategory,
            price,
            // code
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

const GetMenu = async(req,res)=>{
    const restaurantId = req.restaurant.restaurantId; // Assuming `req.restaurant` is set by authentication middleware

    try {
        const menus = await Menu.find({ restaurantId });
        res.render('item-list', { menus }); // Render 'menu.ejs' and pass 'menus' to it
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const GetPos = async(req,res)=>{
    const restaurantId = req.restaurant.restaurantId; // Assuming `req.restaurant` is set by authentication middleware

    try {
        const menus = await Menu.find({ restaurantId });
        res.render('pos', { menus }); // Render 'menu.ejs' and pass 'menus' to it
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const GetFilteredMenu = async (req, res) => {
  const { item, category, subCategory, price } = req.query;
  const restaurantId = req.restaurant.restaurantId;

  const filter = { restaurantId };

  if (item) filter.item = item;
  if (category) filter.category = category;
  if (subCategory) filter.subCategory = subCategory;
  if (price) filter.price = parseFloat(price);

  try {
    const menus = await Menu.find(filter);
    // Pass query params to pre-select filters in view
    res.render('item-list', { menus, item, category, subCategory, price });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


module.exports={ AddMenu,GetMenu,GetPos, GetFilteredMenu

}