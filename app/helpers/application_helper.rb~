module ApplicationHelper
  require 'xml'
  require 'open-uri'
  require 'xml/libxml'

   def read_url(string)  
      temp_url  = open(string).read 
      source = XML::Parser.string(temp_url)
      content = source.parse  
   end 
####################################################
   def spr_daty
       data_xml = data_kursow
       data_baza = Kursy.find(:all, :select =>'data',
			      :order => 'data DESC', :limit => 1 )[0].data
       if data_xml > data_baza 
          dodaj_kurs
          usun_kurs  
       end
   end
   ############################################
   def url_nbp
     content  = read_url("http://rss.nbp.pl/kursy/TabelaA.xml")
     entries = content.root.find('.//enclosure')
     url = entries.first.attributes.get_attribute('url')
     
     if url.first.value.nil?
        "error"
     else
        "#{url.first.value}" 
     end
   end
   ############################################
   def waluty 
         content  = read_url(url_nbp)
         tabela_walut = content.root.find('.//pozycja') 
   end

   ############################################
   def data_kursow 
       content  = read_url(url_nbp)
       data = content.root.find('.//data_publikacji')
       data.first.content 
   end

   ###################### Baza Danych ####################
   
   ##############################
   def dodaj_kurs
       kursy = waluty
       data = data_kursow  
       kursy.each do |k|
        Kursy.create!(
                      :nazwa => k.find_first("nazwa_waluty").content,
                      :kod =>   k.find_first("kod_waluty").content,
                      :przelicznik => k.find_first("przelicznik").content,
                      :kurs =>	  k.find_first("kurs_sredni").content,
                      :data => data 
                      )
       end
   end
   ################################
   def usun_kurs
       temp_data = Kursy.find(:all,:select=> 'data', 
			      :order => 'data ASC', :limit => 1)[0].data
       Kursy.delete_all ("data '#{temp_data.first.data}'")
   end

   def time 
      t = Time.now
      time = t.strftime('%X')
      time > '13:00:00'
   end
end

