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
  @business.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end



# refactor so business show will pull reviews along with business
