json.extract! business, :id, :biz_name, :rating, :address, :phone, :neighborhood, :category.downcase, :cost, :lat, :lng
json.image_url asset_path(business.image.url)

# json.image_url asset_path(business.image.url)
