# json.reviews do
#   json.array! @business.reviews, partial: 'review', as: review
# end

json.partial! 'api/businesses/business', review: @review
# json.reviews @business.reviews, partial: 'review', as: :review
