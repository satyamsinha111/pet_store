use pet_store;

-- create table orders(
-- 	_id int not null primary key,
--     product_id int not null,
--     customer_id int not null,
--     transaction_date datetime not null,
--     order_status varchar(10) not null,
--     invoice_link varchar(200),
--     foreign key (product_id) references product(_id),
--     foreign key (customer_id) references users(_id) 
-- )

-- create table review(
--    _id int not null primary key,
--    order_id int not null,
--    customer_id int not null,
--    images varchar(600),
--    detail varchar(400),
--    rating int,
--    product_id int not null,
--    foreign key (order_id) references orders(_id),
--    foreign key (customer_id) references users(_id),
--    foreign key (product_id) references product(_id)
-- )