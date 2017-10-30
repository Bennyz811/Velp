json.partial! '/api/businesses/business', business: @business


# json.business do
#   json.partial! 'api/businesses/business', business: @business
# end
#
# json.reviews do
#   json.array! @business.reviews, partial: 'api/businesses/business', as: :review
# end
