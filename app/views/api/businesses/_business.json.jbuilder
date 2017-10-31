json.extract! business, :id, :biz_name, :address, :phone, :neighborhood, :category, :cost

json.review_ids do
  json.array! business.reviews.pluck(:id)
end
