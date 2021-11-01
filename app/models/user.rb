# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  updated_at      :datetime         not null
#  created_at      :datetime         not null
#
class User < ApplicationRecord

  attr_reader :password

  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :reviews,
    foreign_key: :reviewer_id,
    class_name: :Review
    
  has_many :products,
    foreign_key: :seller_id,
    class_name: :Product

  has_many :cart_items,
    foreign_key: :user_id,
    class_name: :CartItem

  has_one :cart,
    foreign_key: :user_id,
    class_name: :Cart

  has_one_attached :profile_pic

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
end
