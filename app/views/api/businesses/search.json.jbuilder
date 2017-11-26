json.array!(@businesses) do |business|
  json.(business, *Business.column_names)
  json.image_url asset_path(business.image.url)
  # json.followed(current_user.follows?(business))
end
