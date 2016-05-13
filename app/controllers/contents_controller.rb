class ContentsController < ApplicationController
  def index
    @contents = Content.all
    render :json => @contents
  end

  def create
    content = Content.new(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    if content.save
      render :json => {newContent: Section.find_by_name(params[:section]).contents}
    else
      # flash[:errors] = content.errors.full_messages
      @errors = content.errors.full_messages
      render :json => @errors
    end
    # render :json => {success: "created content in the backend"}
    # redirect_to :back

  end
  def update

    content = Content.find(params[:id])
    
    content.update(title:params[:title],text:params[:text],section:Section.find_by_name(params[:section]))
    render :json => {success: "updated object in the backend"}
    # redirect_to '/contents/show/%d' % params[:id]
  end
  def show
    @inform = Content.find(params[:id])
    render :json =>@inform
  end

  def edit
    # @inform = Content.find(params[:id])

    @inform = Content.find(params[:id])
    # response json data
    # render :json =>@inform
  end
  def destroy
    section= Content.find(params[:id]).section

    Content.destroy(params[:id])

    render :json => {content: section.contents}
    #change redirects to messages
    # redirect_to '/contents/index' 
  end

  def new
    # content = Content.new(event:params[:event],message:params[:message])
   #  if Content.save

   #  else
   #    flash[:errors] = Content.errors.full_messages
   #  end

   #  redirect_to :back
  end

  
end
