using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Cigaretto.DataLayer.DataContext;

namespace Cigaretto.DataLayer.Migrations
{
    [DbContext(typeof(CigarettoDataContext))]
    partial class CigarettoDataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Cigaretto.DataLayer.DataContext.Tables.Component", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ModuleId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("ModuleId");

                    b.ToTable("Components");
                });

            modelBuilder.Entity("Cigaretto.DataLayer.DataContext.Tables.Module", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int?>("ProjectId");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.ToTable("Modules");
                });

            modelBuilder.Entity("Cigaretto.DataLayer.DataContext.Tables.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("Cigaretto.DataLayer.DataContext.Tables.Component", b =>
                {
                    b.HasOne("Cigaretto.DataLayer.DataContext.Tables.Module", "Module")
                        .WithMany("Components")
                        .HasForeignKey("ModuleId");
                });

            modelBuilder.Entity("Cigaretto.DataLayer.DataContext.Tables.Module", b =>
                {
                    b.HasOne("Cigaretto.DataLayer.DataContext.Tables.Project", "Project")
                        .WithMany("Modules")
                        .HasForeignKey("ProjectId");
                });
        }
    }
}
