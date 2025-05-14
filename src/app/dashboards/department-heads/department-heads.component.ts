import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as powerbi from 'powerbi-client';

@Component({
  selector: 'app-department-heads',
  templateUrl: './department-heads.component.html',
  styleUrls: ['./department-heads.component.css']
})
export class DepartmentHeadsComponent implements OnInit {
  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;

  ngOnInit(): void {
    const embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=91c9ab1d-e772-4cc4-bf19-dd2cb2f634ca&groupId=bd6efd72-5221-483f-a327-f563ea3376d4';
    const embedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjA0ZjFhOTYtY2JlOC00M2Y4LWFiYmYtZjhlYWY1ZDg1NzMwLyIsImlhdCI6MTc0NzE0MjI4NSwibmJmIjoxNzQ3MTQyMjg1LCJleHAiOjE3NDcxNDY0MDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84WkFBQUE0cmVicHIrSVk3WXJqV1IrWklIZURkZk5vdllZVVpBMW90Q3NsNE0yelFFV1ovTGRpRzR4cnRCOUNUNkRwT0J2RmdDbFpibVk1TDQ1RjJqOGN0UlNXSVBsaDlBeUIvM0pCamNzYmd1bXNMZXg4U1lTeEh2VWRSU1dqR0xpVmduVjFhMUorNGphY2djRjBxZU5odkd0dVE9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IktBUlJBWSIsImdpdmVuX25hbWUiOiJZYXNtaW4iLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIxOTYuMjAzLjIwNy4xNzgiLCJuYW1lIjoiWWFzbWluIEtBUlJBWSIsIm9pZCI6ImExYjczZGZjLTYwMjYtNDc1Ni1hNWMzLWZmNGQzNGJmYTk1MSIsInB1aWQiOiIxMDAzMjAwMzA5QjU2NjFFIiwicmgiOiIxLkFUb0FsaHBQWU9qTC1FT3J2X2pxOWRoWE1Ba0FBQUFBQUFBQXdBQUFBQUFBQUFBNkFEODZBQS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWQiOiIwMDRlMjdlOS1kMWU0LWVhZWMtMDNiNC0xYmQwYjFmODllOWIiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiItaHRXY0I1S0JPSndSZlA2M0JtVDZ4SFVUdXFqNHhoYVN2T1ZodXpESXU0IiwidGlkIjoiNjA0ZjFhOTYtY2JlOC00M2Y4LWFiYmYtZjhlYWY1ZDg1NzMwIiwidW5pcXVlX25hbWUiOiJZYXNtaW4uS2FycmF5QGVzcHJpdC50biIsInVwbiI6Illhc21pbi5LYXJyYXlAZXNwcml0LnRuIiwidXRpIjoiVWdBb296WXIxVUdEWlIwbW1WMGdBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMTAifQ.Q-e8-ISFdQdd6x9Hyvj53Tryym6kfdEzYXqYXc0cckb9ypvvoEGmuQEKckoVDZPyMxVA8atzCHlZKcLCFF0tr9BcwY4Q-uGAuan64ljiYJyK7QYPkKV7H3mTjOApUvzdKsV-yiAj-5B7NUqZLI9BEnNBNI7u8z4woQJkkuUD1MTmyeyLEa4cgjKGd2GewCAqqAS7E4eYUMZXBfrJxDPMpV76A6KKwz2fxR5A-bNW03LUFOfzzJRIfwW_zYVruyJ118obA49n4FlDfd4d4JJqeeNguOvlUXyo0OOQm53uyteDKDP_A1mM0PqSoYHElXCYr8XRMoZDucXskgHgh1ggEA'; // Si tu utilises un token

    const embedConfig: powerbi.IEmbedConfiguration = {
      type: 'report',
      tokenType: powerbi.models.TokenType.Embed,
      accessToken: embedToken,
      embedUrl: embedUrl,
      id: 'TON_REPORT_ID',
      settings: {
        panes: {
          filters: { visible: false },
          pageNavigation: { visible: true }
        },
        navContentPaneEnabled: true
      }
    };

    const powerbiService = new powerbi.service.Service(
      powerbi.factories.hpmFactory,
      powerbi.factories.wpmpFactory,
      powerbi.factories.routerFactory
    );

    powerbiService.embed(this.reportContainer.nativeElement, embedConfig);
  }
}
