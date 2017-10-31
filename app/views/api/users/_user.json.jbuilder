json.extract! user, :email, :id

json.image_url asset_path(user.image.url)
