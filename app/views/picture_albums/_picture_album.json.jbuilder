json.extract! picture_album, :user_id, :biz_id

json.image_url asset_path(picture_album.image.url)