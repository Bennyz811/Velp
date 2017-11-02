json.array!(@businesses) do |business|
  json.(business, *Business.column_names)
  # json.followed(current_user.follows?(business))
end
