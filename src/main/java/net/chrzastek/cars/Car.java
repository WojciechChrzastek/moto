package net.chrzastek.cars;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import net.chrzastek.users.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cars")
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Car {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @NonNull
  @ManyToOne
  private User user;

  @NonNull
  private String brandname;

  @NonNull
  private String modelname;

  @NonNull
  private int manufactureyear;

}
