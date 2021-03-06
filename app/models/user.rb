class User < ApplicationRecord
  validates :email, :first_name, :last_name, :zip_code, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, uniqueness: true
  attr_reader :password

  has_many :businesses
  has_many :reviews
  has_many :picture_albums

  after_initialize :ensure_session_token
  
  has_attached_file :image, default_url: "beer.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
