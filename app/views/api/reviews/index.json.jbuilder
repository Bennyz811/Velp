# @reviews.each do |review|
#   json.set! review.id do
#     json.partial! 'review', review: review
#   end
# end

json.array! @reviews, :body, :rating, :user_id, :biz_id
