json.business do
  json.partial! '/api/businesses/business', business: @business
  json.review_ids do
    json.array! @business.reviews.pluck(:id)
  end
end


# json.reviews do
#   json.array! @businesses.reviews, partial: 'api/reviews/review', as: :review
# end

# json.reviews @business.reviews do |review|
#   json.body review.body
#   json.rating review.rating
# end
json.reviews do
  reviews = @business.reviews.includes(:user)
  reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
      json.firstName review.user.first_name
      json.lastName review.user.last_name
      json.imageUrl review.user.image.url
    end
  end
end


# fetch user that also belong to the reviews
# refactor so business show will pull reviews along with business
