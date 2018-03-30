@recommend.each do |recom|
  json.set! recom.id do
    json.partial! 'recom', recom: recom
  end
end
