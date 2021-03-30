
import com.hexad.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Primary;

@Configuration
@Import(Application.class)
@Primary
public class DeployableApplicationConfig {
    public static void main(String[] args) {
        SpringApplication.run(DeployableApplicationConfig.class, args);
    }
}
