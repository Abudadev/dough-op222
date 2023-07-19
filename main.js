var updatedimages = ["https://i.postimg.cc/MGn9GJXw/family.jpg","download(8).jpeg","download.jpeg","download (1).jpeg","download (2).jpeg"];
var updatednames = ["Fmaily Book","Moinuddin", "Aisha","Abubaqr","Ali"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
