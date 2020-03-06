package daniel.web4.model;

import lombok.*;
import javax.validation.constraints.*;
import java.io.Serializable;

@Getter
@Setter
public class PointObj implements Serializable{

    @NotNull
    private Double x;

    @NotNull
    private Double y;

    @NotNull
    @DecimalMin(value = "0", inclusive = false)
    @DecimalMax(value = "3", inclusive = false)
    private Double r;

    @Null
    private Boolean res;
}
