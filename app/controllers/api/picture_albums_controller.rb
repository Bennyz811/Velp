class Api::PictureAlbumsController < ApplicationController

    def create
        @picture_album = PictureAlbum.new(pic_params)
        if @picture_album.save
            render :show 
        else 
            render  json: @picture_album, status: :unprocessable_entity
        end
    end 

    def index
        @picture_album = PictureAlbum.where(biz_id: params[:picBizId])
    end 

    def show
        @picture_album = PictureAlbum.find_by(params[:id])
    end 

    private 
    
    def pic_params
        params.require(:picture_album).permit(:user_id, :biz_id)
    end
end
