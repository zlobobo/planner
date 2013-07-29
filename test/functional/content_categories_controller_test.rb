require 'test_helper'

class ContentCategoriesControllerTest < ActionController::TestCase
  setup do
    @content_category = content_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:content_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create content_category" do
    assert_difference('ContentCategory.count') do
      post :create, content_category: {  }
    end

    assert_redirected_to content_category_path(assigns(:content_category))
  end

  test "should show content_category" do
    get :show, id: @content_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @content_category
    assert_response :success
  end

  test "should update content_category" do
    put :update, id: @content_category, content_category: {  }
    assert_redirected_to content_category_path(assigns(:content_category))
  end

  test "should destroy content_category" do
    assert_difference('ContentCategory.count', -1) do
      delete :destroy, id: @content_category
    end

    assert_redirected_to content_categories_path
  end
end
