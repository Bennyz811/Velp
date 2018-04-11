json.array! @reviews do |rev|
  json.partial! 'review', review: rev
  json.user do 
    json.firstName rev.user.first_name
    json.lastName rev.user.last_name
    json.imageUrl rev.user.image.url
  end
end