{% if widget.banner_image.src or widget.banner_title or widget.banner_subtitle or widget.banner_button   %}

<div class="custom-banner" {% if widget.banner_image.src %} style="background-image:url('{{ widget.banner_image.src }}')" {% else %} style="background-color: rgb(98, 109, 117);" {% endif %}>
    <div class="page-center">
        <div class="banner-content">
              {% if widget.banner_subtitle   %}
                    <p>{{ widget.banner_subtitle }}</p>
             {% endif %}
             
             {% if  widget.banner_title   %}
                <h1>{{ widget.banner_title }}</h1>
            {% endif %}
            
            {% if  widget.banner_button_content   %}
                    <a href="{{ widget.banner_button }}">{{ widget.banner_button_content }}</a>
            {% endif %}
            
        </div>
    </div>
</div>

{% endif %}