select ps.price, ps.stock_quantity, p.name, s.name
from price_stock ps
         join shop s on ps.shop_id = s.id
         join product p on ps.product_id = p.id
         join user_product up on ps.product_id = up.product_id
where up.user_id = 1 and up.product_id = 123;