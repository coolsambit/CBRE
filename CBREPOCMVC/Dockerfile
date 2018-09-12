FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY CBREPOCMVC/CBREPOCMVC.csproj CBREPOCMVC/
RUN dotnet restore CBREPOCMVC/CBREPOCMVC.csproj
COPY . .
WORKDIR /src/CBREPOCMVC
RUN dotnet build CBREPOCMVC.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish CBREPOCMVC.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CBREPOCMVC.dll"]
