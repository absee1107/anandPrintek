
-- ANAND PRINTEK ENTERPRISE SAMPLE DATA

-- Categories
INSERT INTO categories (name, slug, description, icon, gst_rate) VALUES
('Printing Services', 'printing', 'Complete printing, stationery and educational material supply', 'printer', 18.00),
('Educational Services', 'educational-services', 'Exam papers, admission forms, and academic printing', 'book-open', 18.00),
('Lab & Science', 'lab', 'Scientific equipment for schools', 'beaker', 12.00),
('University Supplies', 'university', 'Research-grade materials and campus signage', 'graduation-cap', 18.00);

-- Products
INSERT INTO products (name, sku, category_id, price, image_url, description, is_featured, hsn_code, gst_rate) VALUES
('Secure Exam Paper Printing', 'EXAM-001', 2, 1500.00, 'https://images.unsplash.com/photo-1588072432836-e10032774350', 'Seasonal exam paper printing with security watermarks', 1, '9988', 18.00),
('Smart Whiteboard 75"', 'IT-001', 1, 115000.00, 'https://images.unsplash.com/photo-1531297484001-80022131f5a1', '4K UHD Interactive classroom panel', 1, '8528', 18.00),
('Custom School Diary', 'DIARY-01', 2, 85.00, 'https://images.unsplash.com/photo-1544816155-12df9643f363', 'Customized student academic diary', 0, '4820', 12.00),
('Research Thesis Binding', 'UNI-01', 4, 450.00, 'https://images.unsplash.com/photo-1531346688376-ab6275c4725e', 'Hardcover binding with gold foiling', 1, '9987', 18.00);

-- Schools
INSERT INTO schools (name, type, city, state, partnership_tier, discount_percentage) VALUES
('IIT Dhanbad (ISM)', 'university', 'Dhanbad', 'Jharkhand', 'platinum', 20.00),
('BIT Sindri', 'university', 'Sindri', 'Jharkhand', 'gold', 15.00),
('St. Mary''s School', 'school', 'Dhanbad', 'Jharkhand', 'silver', 10.00);
