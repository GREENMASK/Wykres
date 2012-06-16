class Kursy < ActiveRecord::Base
  attr_accessible :data, :kod, :kurs, :nazwa, :przelicznik
end
