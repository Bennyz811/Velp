json.business do
  json.partial! '/api/businesses/business', business: @business
end


# json.reviews do
#   json.array! @businesses.reviews, partial: 'api/reviews/review', as: :review
# end

json.reviews @business.reviews do |review|
  json.body review.body
  json.rating review.rating
end


# refactor so business show will pull reviews along with business
